const downloadButton = document.getElementById('downloadButton');
const imageUrl = "D:\❤🖤\one.jpg"; 

downloadButton.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = 'image.jpg'; // Optional: Specify download filename
  link.click();
});