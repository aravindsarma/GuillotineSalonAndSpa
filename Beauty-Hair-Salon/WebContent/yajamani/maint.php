<?php
$str_json = file_get_contents ( 'php://input' );
chdir ( "../data/" );
@ $fp = fopen ( "services.json", 'w', false );

if (! $fp) {
	echo "<p><strong>your data could not be saved. Try again or Contact Developer.</strong></p>";
	exit ();
}

flock ( $fp, LOCK_EX );
fwrite ( $fp, $str_json );
fclose ( $fp );
echo '<h1>your data has been saved</h1>';
?>