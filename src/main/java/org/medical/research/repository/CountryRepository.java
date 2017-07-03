package org.medical.research.repository;

import org.medical.research.domain.jpa.Country;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CountryRepository extends JpaRepository<Country, Long> {

}
