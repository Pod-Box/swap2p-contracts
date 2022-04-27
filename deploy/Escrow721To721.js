const { ethers } = require("hardhat");

module.exports = async ({ deployments: { deploy } }) => {
  const { tokenXDeployer } = await getNamedAccounts();

  await deploy("Escrow721To721", {
    from: tokenXDeployer,
    args: [ethers.BigNumber.from("10000000000")],
    log: true,
  });
};
module.exports.tags = ["Escrow20To20"];