/**
 * Returns a promise from Chore Service
 * @returns Promise
 */
export default async (id) => {
  debugger;
  const res = await fetch(`http://localhost:8080/bankly/v1/chores?cust_id=${id}`);
  return res.json();
};