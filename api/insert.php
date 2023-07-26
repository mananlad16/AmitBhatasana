
	<?php 
	require 'connection.php';

	$data = json_decode(file_get_contents("php://input"));
	print_r($data);

	if(isset($data->user_name)){
		$name=mysqli_real_escape_string($db_conn, trim($data->user_name));
		$mob=mysqli_real_escape_string($db_conn, trim($data->tel));
		$email=mysqli_real_escape_string($db_conn, trim($data->email));
		$coments=mysqli_real_escape_string($db_conn, trim($data->message));

			$add = mysqli_query($db_conn,"INSERT INTO `contact_info`(`name`, `mob`, `email`, `coments`)
			VALUES ('$name','$mob','$email','$coments')");
			if($add){
			
				$last_id = mysqli_insert_id($db_conn);
				echo json_encode(["success"=>true,"insertid"=>$last_id]);
				
				return;
		    }else{
		        echo json_encode(["success"=>false,"msg"=>"Server Problem. Please Try Again"]);
				return;
		    } 
		

	} else{
	    echo json_encode(["success"=>false,"msg"=>"Please fill all the required fields!"]);
		return;
	}

	?>