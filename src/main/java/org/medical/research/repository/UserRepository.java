package org.medical.research.repository;

import org.medical.research.domain.jpa.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

	public User findByUsername(String username);
}
