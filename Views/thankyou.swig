{% extends 'layout.swig' %}
{%block content%}
<h3>Thank you for your interest in this project, {{fullName}}!</h3>
<p>This is very much a work in progress. In fact...we're not even totally sure if the form that got you to this page works, yet. If you want to get in touch, reach out to <a href="https://twitter.com/sarahebinder">@sarahebinder</a>.</p>
<p>For the record, here's what you submitted:</p>
<ul>
	<li><strong>Name:</strong> {{fullName}}</li>
	<li><strong>Email:</strong> {{email}}</li>
	<li><strong>How do you want to help?</strong> {{how}}</li>
	<li><strong>Message:</strong> {{message}}</li>
</ul>
{%endblock%}