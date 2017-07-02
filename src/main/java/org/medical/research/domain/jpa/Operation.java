package org.medical.research.domain.jpa;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.springframework.security.core.GrantedAuthority;

@Entity
@Table(name = "MRC_OPERATIONS")
public class Operation extends OperationGeneric implements GrantedAuthority{

	private static final long serialVersionUID = 1L;

	@Override
	public String getAuthority() {
		return getOperation() != null ? getOperation().operation : getCustomOperation();
	}

}
