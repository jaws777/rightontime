import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;

  const { deploy } = deployments;

  const {
    deployer,
    traderJoeRouter,
    pangolinFactory
  } = await getNamedAccounts();

  await deploy("FlashSwapPangoJoe", {
    from: deployer,
    log: true,
    args: [traderJoeRouter, pangolinFactory]
  });
};

export default func;
