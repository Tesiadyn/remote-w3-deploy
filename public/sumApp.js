function calc() {
    const input = document.getElementById('num').value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://remote-w3.onrender.com/getData?number=${input}`, true);
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // 4:請求已完成 200:成功response
        // 兩個條件都滿足時才改變h1的內容
        document.getElementById('result').innerText = xhr.responseText;
      } 
    };
  
    xhr.send();
  }

