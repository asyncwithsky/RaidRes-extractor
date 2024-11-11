
function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}


function extractData(typeSR) {
  const rows = document.querySelectorAll('tbody.m_b2404537 tr.m_4e7aa4fd');
  let extractedText = '';

  rows.forEach(row => {
    const playerName = row.querySelector('p.m_b6d8b162').innerText;
	const itemName = row.querySelector('a.m_b6d8b162').innerText;
	const playerComment = row.querySelector('td.comment-cell').innerText
	if (!typeSR)
		extractedText += '[' + playerComment + ']' + playerName + ': ' + playerName + ' - ' + itemName + '\n';
	else
		extractedText += '[00:00]' + playerName + ': ' + playerName + ' - ' + itemName + '\n';
  });
  
  console.log(extractedText.trim());
  copyToClipboard(extractedText.trim());
  alert('Данные скопированы в буфер обмена');
}


