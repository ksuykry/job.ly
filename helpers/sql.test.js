
const { sqlForPartialUpdate } = require("./sql");


describe("sqlForPartialUpdate", function () {
  test("works: 1 item", function () {
      const result = sqlForPartialUpdate(
         {firstName: "alice", age:32}, 
        {
          firstName: "first_name",
          age: "age"
        }
        );

      expect(result).toEqual({
        setCols: "\"first_name\"=$1, \"age\"=$2",
        values: ["alice", 32]
      });

      })
    });
