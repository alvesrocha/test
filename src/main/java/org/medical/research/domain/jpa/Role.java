package org.medical.research.domain.jpa;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.springframework.security.core.GrantedAuthority;

@Entity
@Table(name = "MRC_ROLES")
public class Role extends RoleGeneric implements GrantedAuthority{

	private static final long serialVersionUID = 1L;

	@Override
	public String getAuthority() {
		return getName();
	}

}
