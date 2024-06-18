import { ValidateInputPipe } from "./validate-input.pipe";

describe("ValidateInputPipe", () => {
  it("create an instance", () => {
    const pipe = new ValidateInputPipe();
    expect(pipe).toBeTruthy();
  });
});
