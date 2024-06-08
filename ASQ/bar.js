import Foo from "./foo.js";

class Bar extends Foo {
  static awesome() {
    super.cool();
    console.log("awesome");
  }

  neat() {
    super.wow();
    console.log("neat");
  }
}

export default Bar;
