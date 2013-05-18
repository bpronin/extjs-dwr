package com.bo;


import java.util.ArrayList;
import java.util.List;

/**
 * Class Users.
 *
 * @author Boris Pronin (<a href="mailto:bpronin@bttprime.com">bpronin@bttprime.com</a>)
 */
public class UsersService {

    private List<User> users = new ArrayList<User>();

    public UsersService() {
        for (int i = 0; i < 1000; i++) {
            add();
        }
    }

    public Users read(StoreParams params, UserExtraParams extraParams) {
        int size = users.size();
        int end = params.getStart() + params.getLimit();
        if (end > size) {
            end = size;
        }
        System.out.println("GET: " + params.getStart() + " : " + end);
        System.out.println("EXTRA:" + extraParams);
        return new Users(users.subList(params.getStart(), end), size);
    }

    public User create(UserExtraParams extraParams) {
        User user = add();
        System.out.println("CREATE: " + user);
        System.out.println("EXTRA:" + extraParams);
        return user;
    }

    public void update(User[] users, UserExtraParams extraParams) {
        for (User user : users) {
            this.users.set(user.getId(), user);
            System.out.println("UPDATE: " + user);
            System.out.println("EXTRA:" + extraParams);
        }
    }

    public void destroy(User[] users, UserExtraParams extraParams) {
        for (User user : users) {
            this.users.remove(user.getId());
            System.out.println("DESTROY: " + user);
            System.out.println("EXTRA:" + extraParams);
        }
    }

    private User add() {
        int id = users.size();
        int no = id + 1;
        User user = new User(id, "user-" + no, "user-" + no + "@mail.com");
        users.add(user);
        return user;
    }

}
