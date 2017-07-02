/*
package org.medical.research.event;

import org.medical.research.domain.AbstractDocument;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
import org.springframework.util.ReflectionUtils;

public class CascadeSaveMongoEventListener extends AbstractMongoEventListener<AbstractDocument> {

	@Autowired
	private MongoOperations mongoOperations;

	@Override
	public void onBeforeConvert(BeforeConvertEvent<AbstractDocument> event) {
		ReflectionUtils.doWithFields(event.getSource().getClass(), new CascadeCallback(event.getSource(), mongoOperations));
	}
}
*/