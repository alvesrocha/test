package org.medical.research.service;

import org.medical.research.domain.jpa.User;
import org.medical.research.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public User saveUser(User user) {
		//logic here
		return userRepository.save(user);
	}
	
}
