<!DOCTYPE HTML>

<html

<head>
<script src="http://code.jquery.com/jquery-1.10.0.js"></script>
<script src="http://jawsjs.com/jawsjs/jaws.js"></script>
<?php 
	require_once 'php_src/setenv.php';
	echo '<script src="'.$GLOBALS['JS'].'/logger.js"></script>';
	echo '<script src="'.$GLOBALS['JS'].'/loadAnimation.js"></script>';
	
 ?>
 <script>
		$(document).ready(function () {
			printLog("Pagina inizializzata", "debug");
			printLog("Lancio main animazione", "info");
			// statrJawsjs();
		});
	</script>
</head>


<body>
	 
	<canvas id="main_canvas" height="600" width="600">
	</canvas>
	<div id="logDiv">
		
	</div>
	
	
</body>

<?php 
/**
 * 
 *
 * @author AdryNi
 * @version 0.01
 * @copyright 
 * @package default
 */

/**
 * Main entry point
 * Load the game and the js engine
 */



 ?>




</html>
