package org.medical.research.service;

import java.util.List;

import org.medical.research.domain.jpa.City;
import org.medical.research.domain.jpa.Country;
import org.medical.research.repository.CityRepository;
import org.medical.research.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CrudService {
	
	@Autowired
	private CountryRepository countryRepository;
	
	@Autowired
	private CityRepository cityRepository;
	
	public List<Country> getAllCountries() {
		return countryRepository.findAll();
	}

	public List<City> getCitiesByCountryId(String countryId) {
		return cityRepository.findByCountryId(countryId);
	}
	
}
