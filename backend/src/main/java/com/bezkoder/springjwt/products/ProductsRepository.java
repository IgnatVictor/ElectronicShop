package com.bezkoder.springjwt.products;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.relational.core.sql.From;
import org.springframework.data.relational.core.sql.Select;
import org.springframework.data.repository.CrudRepository;

import static javax.swing.text.html.HTML.Tag.SELECT;
import static org.hibernate.hql.internal.antlr.HqlTokenTypes.FROM;
import static org.hibernate.sql.ast.Clause.LIMIT;

public interface ProductsRepository extends JpaRepository<Products, Long> {


      Products getProductsById(Long id);



}
