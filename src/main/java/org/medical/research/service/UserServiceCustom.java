package org.medical.research.service;

import java.util.HashSet;
import java.util.Set;

import org.medical.research.domain.jpa.Group;
import org.medical.research.domain.jpa.Role;
import org.medical.research.domain.jpa.User;
import org.medical.research.repository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class UserServiceCustom implements UserDetailsService {

	private final UserRepository userRepository;

	public UserServiceCustom(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByUsername(username);
		Set<GrantedAuthority> authorities = new HashSet<GrantedAuthority>();
		if (user != null) {
			authorities.addAll(user.getRoles());
			for (Role role : user.getRoles()) {
				authorities.addAll(role.getOpeations());
			}
			for (Group group : user.getGroups()) {
				authorities.addAll(group.getRoles());
				for (Role role : group.getRoles()) {
					authorities.addAll(role.getOpeations());
				}
			}
		}
		return new org.springframework.security.core.userdetails.User(username, user.getPassword(), authorities);
	}

}
