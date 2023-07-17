import qrcode
text = "3894578934758904375892340570234758902437589023740"
data = text #URL or alternative a text in a variable

filename = "qrcode.png" #File were the QR be saved

img = qrcode.make(data) #Create the QR

img.save(filename) #Save the QR
