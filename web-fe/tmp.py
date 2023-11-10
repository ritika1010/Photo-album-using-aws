def plural_to_singular(word):
    irregular_plurals = {
        "men": "man",
        "women": "woman",
        "people" : "person",
    }

    if word in irregular_plurals:
        return irregular_plurals[word]

    if word.endswith("s"):
        if word.endswith("ss"):
            return word  # Words like "grass" have the same form in both singular and plural
        if word.endswith("ies"):
            return word[:-3] + "y"  # Words ending with "ies" (e.g., "bodies" -> "body")
        if word.endswith("es"):
            if word[-3] in "sxo":
                return word  # Words like "taxes" have the same form in both singular and plural
            return word[:-2]  # Remove the "es" ending
        return word[:-1]  # Remove the "s" ending
    else:
        return word

# Example usage:
plural_words = ["apples", "cats", "bodies", "watches", "men", "women"]
for plural_word in plural_words:
    singular_word = plural_to_singular(plural_word)
    print(f"{plural_word} -> {singular_word}")
