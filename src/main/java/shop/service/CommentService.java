package shop.service;

import shop.entity.products.Comment;
import shop.entity.products.Product;

import java.util.List;

public interface CommentService {
    List<Comment> findByProduct(Product product);

}