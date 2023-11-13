function updateResult(value) {
    document.getElementById("result").value = value;
  }

  for (let i = 0; i <= 9; i++) {
    document.getElementById("btn" + i).addEventListener("click", function () {
      updateResult(document.getElementById("result").value + i);
    });
  }

  document.getElementById("btnPlus").addEventListener("click", function () {
    updateResult(document.getElementById("result").value + "+");
  });

  document.getElementById("btnMinus").addEventListener("click", function () {
    updateResult(document.getElementById("result").value + "-");
  });

  document.getElementById("btnMultiply").addEventListener("click", function () {
    updateResult(document.getElementById("result").value + "*");
  });

  document.getElementById("btnDivide").addEventListener("click", function () {
    updateResult(document.getElementById("result").value + "/");
  });


  document.getElementById("btnEquals").addEventListener("click", function () {
    updateResult(eval(document.getElementById("result").value));
  });


  document.getElementById("btnClear").addEventListener("click", function () {
    updateResult("");
  });