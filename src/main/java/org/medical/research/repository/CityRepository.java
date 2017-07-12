package org.medical.research.repository;

import java.util.List;

import org.medical.research.domain.jpa.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CityRepository extends JpaRepository<City, Long> {

	public List<City> findByCountryId(String countryId);
}
