import 'package:flutter/material.dart';

void main() => runApp(MyHomePage());

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> with TickerProviderStateMixin {
  AnimationController _controller;

  @override
  initState() {
    super.initState();

    _controller = AnimationController(
      lowerBound: 50.0,
      upperBound: 300.0,
      vsync: this,
      duration: Duration(seconds: 1),
    );
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: GestureDetector(
          onTap: () {
            final status = _controller.status;
            if (status == AnimationStatus.completed) {
              _controller.reverse();
            } else {
              _controller.animateTo(
                300.0,
                curve: Curves.bounceOut,
              );
            }
          },
          child: Center(
            child: AnimatedBuilder(
              animation: _controller,
              child: Container(
                color: Colors.red,
                constraints: BoxConstraints.expand(),
              ),
              builder: (context, child) {
                return Container(
                  child: child,
                  height: _controller.value,
                  width: _controller.value,
                );
              },
            ),
          ),
        ),
      ),
    );
  }
}
