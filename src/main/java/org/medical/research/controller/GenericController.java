package org.medical.research.controller;

import java.util.List;

import org.medical.research.domain.jpa.City;
import org.medical.research.domain.jpa.Country;
import org.medical.research.service.CrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@SpringBootApplication
@Controller
public class GenericController {

	@Autowired
	private CrudService crudService;
	
	
	@RequestMapping(value = "/countries")
	@ResponseBody
	public List<Country> getAllcountries() {
		return crudService.getAllCountries();
	}
	
	@RequestMapping(value = "/cities")
	@ResponseBody
	public List<City> getCitiesByCountry(@RequestParam("country") String country) {
		return crudService.getCitiesByCountryId(country);
	}
}
