package org.medical.research.controller;

import org.medical.research.domain.jpa.Clinic;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@SpringBootApplication
@Controller
public class ClinicController {

	
	@RequestMapping(value = "/clinic", method = RequestMethod.POST)
	@ResponseBody
	public Clinic register(@RequestBody Clinic clinic) {
		return clinic;
	}
}
