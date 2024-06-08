onmessage = function onmessage(message) {
  if (message.data.command == "generate") {
    generatePrime(message.data.qoutaInput);
  }
};

function generatePrime(qoutaInput) {
  function isPrime(n) {
    console.log("hello worker");

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }

  const primes = [];
  const maximum = 1000000;

  while (primes.length < qoutaInput) {
    const candidate = Math.floor(Math.random() * (maximum + 1));

    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  postMessage(primes.length);
}
