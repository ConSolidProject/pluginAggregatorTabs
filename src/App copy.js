import React, { useEffect, useState, Suspense } from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import GenericRemoteComponent from './utils/GenericRemoteComponent'
import mem from 'mem'

import { Drawer, CssBaseline, Divider, SvgIcon } from "@material-ui/core";

const miniDrawerWidth = 60;
const packageJSON = require("../package.json");

const generateClassname = createGenerateClassName({
  productionPrefix: packageJSON.name,
  // disableGlobal: true,
  seed: packageJSON.name,
});

// const getComponent = (component, sharedProps) => {
//   let MyComponent;
//   MyComponent = (
//     <System
//       system={{
//         module: component.module,
//         url: component.url,
//         scope: component.scope,
//       }}
//       sharedProps={sharedProps.sharedProps}
//       module={component}
//     />
//   );
//   return MyComponent
// };

const Plugin = ({sharedProps, children, module: mod}) => {
  const [activePlugin, setActivePlugin] = useState(Object.keys(mod.children)[0]);
  function activatePlugin(plugin) {
    setActivePlugin(plugin);
  }

  return (
    <div>
      <StylesProvider generateClassName={generateClassname}>
        <CssBaseline />
        <div
          id="pluginChild"
          style={{
            width: mod.dimensions.w - miniDrawerWidth - 2,
            marginLeft: miniDrawerWidth,
          }}
        >
{Object.keys(mod.children).map((child) => {

    const module = {...mod.children[child], dimensions: {...mod.dimensions, width: mod.dimensions - miniDrawerWidth - 2}}
          return <GenericRemoteComponent key={child} mount={children[child]} sharedProps={sharedProps} module={module} inactive={(activePlugin === child) ? false : true}/>

        })}        </div>
        <Drawer anchor="left" variant="permanent">
          <div></div>
          <Divider />
          {Object.keys(mod.children).map((text) => {
            return (
              <div style={{ margin: 10, marginLeft: 4 }} key={text+"_icon"}>
                <SvgIcon
                  color="primary"
                  style={{ marginLeft: 15, height: 30, width: 30 }}
                  onClick={() => activatePlugin(text)}
                >
                  <path d={mod.children[text].icon} />
                </SvgIcon>
              </div>
            );
          })}
          <Divider />
        </Drawer>
      </StylesProvider>
    </div>
  );
};

export default Plugin;
