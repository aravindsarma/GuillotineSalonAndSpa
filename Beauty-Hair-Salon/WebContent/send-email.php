<?php
	/*
	 * ======================================
	 * CONFIGURATIOM
	 * ======================================
	 */
	$recipient_email = 'info@guillotinesalonandspa.com'; // the email address to receive the contact form.
	$subject = 'Contact email for Guillotine Salon & Spa'; // the subject of the contact email
	$message = 'Thank you for contacting us.'; // thank you message
	$error_message = 'An error has occured. Please try again'; // error message

	$required = array('message', 'first_name', 'last_name', 'email');
	$labels = array(
		'message' => 'Message',
		'first_name' => 'First name',
		'last_name' => 'Last name',
		'email' => 'Email',
		'phone' => 'Phone',
		'contact' => 'How you prefer to be contacted',
	);
	/*
	 * ======================================
	 * END CONFIGURATIOM
	 * ======================================
	 */


	/*
	 * ¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡ 
	 * DON'T TOUCH
	 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	 */

	$send = false;
	$valid = true;

	$fields = $_POST['fields'];

	if ($_POST['action'] == 'signin' && $_POST['email2'] == '') { // email2 field to avoid spam. Spambots will inform the field email2, persons not because is not visible in the form.
		// validation

		foreach($required as $r) {
			if (isset($fields[$r])) {
				$valid = strlen($fields[$r]) > 0 && $valid;
			} else {
				$valid = false;
			}

			if (!$valid) { break; };
		}

		// email
		if ($valid) {
			$valid = $valid && preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$fields['email']);
		}

		if ($valid) {
			$to = $recipient_email;

			$body = "";

			foreach($fields as $key => $value) {
				if (!empty($value) && isset($labels[$key])) {
					$body .= $labels[$key].": <br />".addslashes($value)."<br />----<br />";
				}
			}
			$to = explode(',', $to);
			foreach ($to as $address) {
				$send = mail(trim($address), $subject, $body, "From: ".$fields['email']."\nContent-Type: text/html");
			}
		}
	}

	if (!send)
		$message = $error_message;
	/*
	 * ¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡ 
	 * END DON'T TOUCH
	 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	 */

?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
<!--<![endif]-->

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title></title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link href='http://fonts.googleapis.com/css?family=Playball|Raleway:400,300,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="css/bootstrap-theme.min.css">
	<link rel="stylesheet" href="css/fontello.pack.css">
	<link rel="stylesheet" href="css/main.css">
	<link rel="stylesheet" href="css/medias.css">

	<script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
	<script>
		setTimeout(function() {
			window.location = 'index.html';
		}, 6000);
	</script>
</head>

<body data-spy="scroll" data-offset="150" id="profile">
		<div class="container" id="profile">
			<div class="row">
				<div class="col-sm-12">
					<h2><?php echo $message  ?></h2>
					<p>If in a few seconds you are not redirected to the home page, clic link below.</p>
				</div>
			</div>
		</div>
		<div class="wrap">
			<a class="" href="index.html">Go home!</a>
		</div>



    	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.0.min.js"><\/script>')</script>

        <script src="js/vendor/bootstrap.min.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X');ga('send','pageview');
        </script>
    </body>
</html>
