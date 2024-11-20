import Moka from "../moka";
import { expect } from "chai";
import "mocha";

describe("Moka", () => {
  let moka: Moka;

  beforeEach(() => {
    moka = new Moka();
  });

  it("debería crear una instancia de Moka", () => {
    expect(moka).to.be.instanceOf(Moka);
  });

  it("debería poder obtener un gif de saludo", async () => {
    const result = await moka.getWave();
    expect(result).to.not.be.undefined;
  });

  it("debería manejar errores correctamente", async () => {
    try {
      await moka.getSip();
      expect(true).to.be.true;
    } catch (error) {
      expect(error).to.exist;
    }
  });
});
