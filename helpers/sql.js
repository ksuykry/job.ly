const { BadRequestError } = require("../expressError");

// THIS NEEDS SOME GREAT DOCUMENTATION. 
// This creates the SQL code for a database update query.
// It takes a sequence of keys denoting characteristics to be updated, 
// and returns a SQL string which can be used in a database update query.
// This is invoked in the "update" function in "models/user.js". 

function sqlForPartialUpdate(dataToUpdate, jsToSql) {
  const keys = Object.keys(dataToUpdate);
  if (keys.length === 0) throw new BadRequestError("No data");

  // {firstName: 'Aliya', age: 32} => ['"first_name"=$1', '"age"=$2']
  const cols = keys.map((colName, idx) =>
      `"${jsToSql[colName] || colName}"=$${idx + 1}`,
  );

  return {
    setCols: cols.join(", "),
    values: Object.values(dataToUpdate),
  };
}

module.exports = { sqlForPartialUpdate };
