/**
 * Created by diego on 28-12-16.
 */

export default async function (userName,lastName) {


   await timeout(20000);
  return "test";

}

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
