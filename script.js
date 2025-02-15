function checkUrl() {
  let currentUrl = window.location.href;
  const substring = "https://youtube.com/shorts";
  if(currentUrl.includes(substring));
    window.location.href = "chrome://dino/"
}
checkUrl();
