// test/Token.js
const Token = artifacts.require("Token");

contract("Token", (accounts) => {
  it("should put 1000000 Token in the first account", async () => {
    const instance = await Token.deployed();
    const balance = await instance.balanceOf(accounts[0]);
    assert.equal(balance.valueOf(), 1000000 * (10 ** 18), "1000000 wasn't in the first account");
  });

  it("should transfer tokens correctly", async () => {
    const instance = await Token.deployed();
    await instance.transfer(accounts[1], 100, { from: accounts[0] });
    const balance = await instance.balanceOf(accounts[1]);
    assert.equal(balance.valueOf(), 100, "100 tokens weren't transferred to the second account");
  });
});
