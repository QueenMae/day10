async function sayHello() {
  return new Promise((resolve) => {
    resolve("Hello World!");
  });
}

sayHello().then((message) => {
  console.log(message); 
});
