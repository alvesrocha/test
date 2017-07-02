/*package org.medical.research.event;

import java.lang.reflect.Field;

import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.util.ReflectionUtils;

public class CascadeCallback implements ReflectionUtils.FieldCallback {

	private Object source;
	private MongoOperations mongoOperations;

	public CascadeCallback(final Object source, final MongoOperations mongoOperations) {
		this.source = source;
		this.mongoOperations = mongoOperations;
	}
	
	@Override
	public void doWith(Field field) throws IllegalArgumentException, IllegalAccessException {
		ReflectionUtils.makeAccessible(field);
		if (field.isAnnotationPresent(DBRef.class)) {
			final Object fieldValue = field.get(source);

			if (fieldValue != null) {
				if(fieldValue instanceof Iterable) {
					Iterable<Object> it = (Iterable) fieldValue;
					for(Object obj : it){
						mongoOperations.save(obj);
						
					}
				}else{
					mongoOperations.save(fieldValue);
				}
			}
		}

	}

}
*/