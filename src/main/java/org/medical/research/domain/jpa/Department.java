package org.medical.research.domain.jpa;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "MRC_DEPARTMENTS")
public class Department {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID")
	private Long id;

	@Column(name = "NAME")
	private String name;

	@ManyToOne
	@JoinColumn(name="CLINIC_ID")
	private Clinic clinic;
	
	@Column(name = "ENABLED")
	private Boolean enabled;

	@ManyToMany
	@JoinTable(name = "MRC_PROFILE_ROLES", joinColumns = @JoinColumn(name = "DEPT_ID", referencedColumnName = "ID"), inverseJoinColumns = @JoinColumn(name = "PROFILE_ID", referencedColumnName = "ID"))
	private Set<Profile> profiles;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Boolean getEnabled() {
		return enabled;
	}

	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}

	public Set<Profile> getProfiles() {
		return profiles;
	}

	public void setProfiles(Set<Profile> profiles) {
		this.profiles = profiles;
	}
}
