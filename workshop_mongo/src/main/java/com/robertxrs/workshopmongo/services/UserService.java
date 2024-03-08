package com.robertxrs.workshopmongo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.robertxrs.workshopmongo.domain.User;
import com.robertxrs.workshopmongo.dto.UserDTO;
import com.robertxrs.workshopmongo.repository.UserRepository;
import com.robertxrs.workshopmongo.services.exception.ObjectNotFoundException;

@Service
public class UserService {

	@Autowired
	private UserRepository repo;

	public List<User> findAll() {
		return repo.findAll();
	}

	public User findById(String id) {
		Optional<User> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException("Objeto não encontrado"));
	}

	public User insert(User obj) {
		return repo.insert(obj);
	}

	public User fromDTO(UserDTO objDTo) {
		return new User(objDTo.getId(), objDTo.getName(), objDTo.getEmail());
	}
	public void delete(String id) {
		findById(id);
		repo.deleteById(id);	
	}
	
	private void updateData(User newObj, User obj){
		newObj.setName(obj.getName());
		newObj.setEmail(obj.getEmail());
	}
	
	public User update(User obj) { 
		User newObj = findById(obj.getId()); 
		updateData(newObj, obj); 
		return repo.save(newObj); 
		}

}
