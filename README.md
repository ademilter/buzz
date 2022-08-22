# Buzz

Buzz is a [hugo](https://gohugo.io) theme

## Installation

To install Buzz as your default theme, first install this repository in
the `themes/` directory:

```bash
$ cd themes/
$ git clone https://github.com/ademilter/buzz.git
```

Second, specify `buzz` as your default theme in the `config.yaml` file.
Just add the line at the top of the file.

```yaml
# config.yaml
theme: "buzz"
```

## Options

Buzz includes some customizable options, typically applied via classes on
the `<body>` element.

### Menu

Create a list of nav links in the sidebar by assigning "menu=main" in the front
matter, like so:

**YAML**

```yaml
# config.yaml
theme: "buzz"

menu:
  main:
    - name: About
      pageref: /about
    - name: Archive
      pageref: /posts
```

### Description

Customise the describe of your page using `description`, like so:

**YAML**

```yaml
# config.yaml
theme: "buzz"

params: description = "Your custom description"
```

### Google Analytics

Google Analytics can be enabled by assigning your tracking code to
the `googleAnalytics` variable in the config file:

```yaml
# config.yaml
googleAnalytics: Your tracking code
```

## Author

**Adem ilter**

- <https://github.com/ademilter>
- <https://twitter.com/ademilter>

## License

Open sourced under the [MIT license](LICENSE.md).
