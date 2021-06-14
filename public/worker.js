self.addEventListener("message", (event) => {
  console.log(event);
  console.log(event.data);

  let count = 0;
  for (let i = 0; i < 1000000000; i++) {
    count += i;
  }
  self.postMessage({
    message: count,
  });
});
