{% extends 'layout.swig' %}

{%block content%}

<form method="post">
	<div class="row">
		<div class="six columns">
			<label for "username">Username:</label><input class="u-full-width" type="text" name="username" required>
		</div>
		<div class="six columns">
			<label for "password">Password:</label><input class="u-full-width" type="password" name="password" required>
		</div>
	</div>
		<div class="u-full-width">
			<input type="submit" value="login">
		</div>
	</form>
	<a href="/"><button>Just kidding, go back home</button></a>

{%endblock%}