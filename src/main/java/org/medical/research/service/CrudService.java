package org.medical.research.service;

import java.util.List;

import org.medical.research.domain.jpa.Country;
import org.medical.research.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CrudService {
	
	@Autowired
	private CountryRepository countryRepository;
	
	public List<Country> getAllCountries() {
		return countryRepository.findAll();
	}
	
}
