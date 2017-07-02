package org.medical.research.domain.jpa;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class OperationGeneric {

	enum OperationEnum {
		FULL_CONTROL("OP_FULL_CONTROL"), READ("OP_READ"), WRITE("OP_WRITE"), EXECUTE("OP_EXECUTE"), LIST(
				"OP_LIST"), CUSTOM("OP_CUSTOM");

		String operation;

		OperationEnum(String operation) {
			this.operation = operation;
		}

	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID")
	private Long id;

	@ManyToMany
	@JoinTable(name = "MRC_ROLE_OPERATIONS", joinColumns = @JoinColumn(name = "PERMISSION_ID", referencedColumnName = "ID"), inverseJoinColumns = @JoinColumn(name = "ROLE_ID", referencedColumnName = "ID"))
	private Set<Role> roles;

	@Enumerated(EnumType.STRING)
	@Column(name = "OPERATION")
	private OperationEnum operation;

	@Column(name = "CUSTOM_OPERATION")
	private String customOperation;

	@Column(name = "ENABLED")
	private Boolean enabled;

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	public OperationEnum getOperation() {
		return operation;
	}

	public void setOperation(OperationEnum operation) {
		this.operation = operation;
	}

	public String getCustomOperation() {
		return customOperation;
	}

	public void setCustomOperation(String customOperation) {
		this.customOperation = customOperation;
	}

	public Boolean getEnabled() {
		return enabled;
	}

	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
}
