import Nprogress from "nprogress";
import React, {useState, useEffect} from "react";
import ReactPlaceholder from "react-placeholder";

import "nprogress/nprogress.css";
import "react-placeholder/lib/reactPlaceholder.css";

const useBeforeFirstRender = (func) => {
  const [hasRendered, setHasRendered] = useState(false)
  useEffect(() => setHasRendered(true), [hasRendered])
  !hasRendered && func();
};

export const asyncComponent = (importComponent) => {
  const AsyncFunction = (props) => {
    const [component, setComponent] = useState(null);
    const [mounted, setMounted] = useState(false);
    const Component = component || <div />;
  
    useBeforeFirstRender(() => {
      Nprogress.configure({
        easing: "ease",
        speed: 1000,
        showSpinner: false
      });
      Nprogress.start();
    });
  
    useEffect(() => {
      async function handleSetComponent() {
        setMounted(true);
        const { default: Component } = await importComponent();
        Nprogress.done();
        mounted && setComponent(<Component {...props} />);
      }
  
      handleSetComponent();
      return () => {
        setMounted(false);
      }
    }, [mounted, props]);
  
    return (
      <ReactPlaceholder ready={Component !== null}
        rows={7}
        type="text">
        {Component}
      </ReactPlaceholder>
    );
  };

  return AsyncFunction;
};
