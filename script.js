<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="1894.7">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px 'PingFang SC'}
    p.p3 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
    span.s1 {font: 12.0px Helvetica}
    span.s2 {font: 12.0px 'PingFang SC'}
  </style>
</head>
<body>
<p class="p1">document.getElementById('generateInvoice').addEventListener('click', () =&gt; {</p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>// </span>获取表单中的值</p>
<p class="p1"><span class="Apple-converted-space">  </span>const companyName = document.getElementById('companyName').value;</p>
<p class="p1"><span class="Apple-converted-space">  </span>const clientName = document.getElementById('clientName').value;</p>
<p class="p1"><span class="Apple-converted-space">  </span>const itemDescription = document.getElementById('itemDescription').value;</p>
<p class="p1"><span class="Apple-converted-space">  </span>const quantity = document.getElementById('quantity').value;</p>
<p class="p1"><span class="Apple-converted-space">  </span>const unitPrice = document.getElementById('unitPrice').value;</p>
<p class="p1"><span class="Apple-converted-space">  </span>const taxRate = document.getElementById('taxRate').value;</p>
<p class="p3"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>// <span class="s2">计算总价</span></p>
<p class="p1"><span class="Apple-converted-space">  </span>const totalPrice = (quantity * unitPrice * (1 + taxRate / 100)).toFixed(2);</p>
<p class="p3"><br></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>// </span>显示发票内容</p>
<p class="p1"><span class="Apple-converted-space">  </span>document.getElementById('invoiceCompanyName').innerText = `Company: ${companyName}`;</p>
<p class="p1"><span class="Apple-converted-space">  </span>document.getElementById('invoiceClientName').innerText = `Client: ${clientName}`;</p>
<p class="p1"><span class="Apple-converted-space">  </span>document.getElementById('invoiceItemDescription').innerText = itemDescription;</p>
<p class="p1"><span class="Apple-converted-space">  </span>document.getElementById('invoiceQuantity').innerText = quantity;</p>
<p class="p1"><span class="Apple-converted-space">  </span>document.getElementById('invoiceUnitPrice').innerText = `$${unitPrice}`;</p>
<p class="p1"><span class="Apple-converted-space">  </span>document.getElementById('invoiceTaxRate').innerText = `${taxRate}%`;</p>
<p class="p1"><span class="Apple-converted-space">  </span>document.getElementById('invoiceTotalPrice').innerText = `$${totalPrice}`;</p>
<p class="p3"><br></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>// </span>显示发票和下载按钮</p>
<p class="p1"><span class="Apple-converted-space">  </span>document.getElementById('invoiceDisplay').classList.remove('hidden');</p>
<p class="p1"><span class="Apple-converted-space">  </span>document.getElementById('downloadPDF').classList.remove('hidden');</p>
<p class="p1">});</p>
<p class="p3"><br></p>
<p class="p1">document.getElementById('downloadPDF').addEventListener('click', () =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">  </span>window.print();</p>
<p class="p1">});</p>
</body>
</html>
