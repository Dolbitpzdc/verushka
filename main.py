from flask import Flask, render_template, request, g, url_for, make_response, flash, redirect
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText


#conf
DEBUG = True
SECRET_KEY = '12fn456n65fps9454nys3t54b3i'


app = Flask(__name__)
app.config.from_object(__name__)


@app.route('/')
@app.route('/home-EN')
def home_en():
    return render_template("index.html")



@app.route('/connect', methods=["POST", "GET"])
def connect():
    if request.method == 'POST':

        mail_content = "Email: " + request.form['email'] + "\nИмя: " + request.form['name']  + "\nКурс: " + request.form['course'] + "\nВариант обучения: " + request.form['courseOption']


        sender_address = 'veraqwe2@gmail.com'
        sender_pass = 'veraqweerty'

        receiver_address = 'biwuxqpolp33.org@gmail.com'


        message = MIMEMultipart()
        message['From'] = sender_address
        message['To'] = receiver_address
        message['Subject'] = 'Message for site'



        message.attach(MIMEText(mail_content, 'plain'))


        session = smtplib.SMTP('smtp.gmail.com', 587)
        session.starttls()
        session.login(sender_address, sender_pass)
        text = message.as_string()
        session.sendmail(sender_address, receiver_address, text)
        session.quit()

        flash("Заявка принята", category='success')

    else:
       flash("а хуй те", category='error')

    return redirect(url_for('home_en'))


if __name__ == '__main__':
    app.run(debug=True)