import React, { useEffect, useState, Suspense } from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import {System} from 'consolid-react-ui'

import { Drawer, CssBaseline, Divider, SvgIcon } from "@material-ui/core";

const miniDrawerWidth = 60;
const packageJSON = require("../package.json");

const generateClassname = createGenerateClassName({
  productionPrefix: packageJSON.name,
  seed: packageJSON.name,
});

const Plugin = ({sharedProps, module: mod}) => {
  let initial
  (mod.children && Object.keys(mod.children)[0]) ? initial = Object.keys(mod.children)[0] : null
  console.log(`initial`, initial)
  const [activePlugin, setActivePlugin] = useState(initial);

  function activatePlugin(plugin) {
    setActivePlugin(plugin);
  }

  if (!mod.children) return <p>This plugin needs child modules to render and cannot be used as standalone. No child modules were passed. Please use always in a container application using an LBDserver configuration.</p>

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

    const conf = {...mod.children[child], dimensions: {...mod.dimensions, width: mod.dimensions - miniDrawerWidth - 2}}
      return <System
      system={{
        module: conf.module,
        url: conf.url,
        scope: conf.scope,
      }}
      sharedProps={sharedProps}
      inactive={(activePlugin === child) ? false : true}
      module={conf}
    />
          // return <GenericRemoteComponent key={child} mount={children[child]} sharedProps={sharedProps} module={module} inactive={(activePlugin === child) ? false : true}/>

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
