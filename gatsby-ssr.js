import React from "react";

("use strict");

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents([
    <div
      key={pluginOptions.key ? pluginOptions.key : "modal-root"}
      id={pluginOptions.id ? pluginOptions.id : "modal-root"}
    >
      {pluginOptions.text}
    </div>,
  ]);
};
